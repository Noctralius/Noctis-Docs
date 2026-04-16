'use client';

import type { SharedProps } from 'fumadocs-ui/contexts/search';
import { useDocsSearch } from 'fumadocs-core/search/client';
import { flexsearchStaticClient } from 'fumadocs-core/search/client/flexsearch-static';
import {
  SearchDialog as BaseSearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
} from 'fumadocs-ui/components/dialog/search';

export default function SearchDialog(props: SharedProps) {
  const { search, setSearch, query } = useDocsSearch({
    client: flexsearchStaticClient({
      from: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/api/search`,
    }),
  });

  return (
    <BaseSearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== 'empty' ? query.data : null} />
        <SearchDialogFooter />
      </SearchDialogContent>
    </BaseSearchDialog>
  );
}
