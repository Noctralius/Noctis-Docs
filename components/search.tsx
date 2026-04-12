'use client';

import { useDocsSearch } from 'fumadocs-core/search/client';
import { flexsearchStaticClient } from 'fumadocs-core/search/client/flexsearch-static';
import type { SharedProps } from 'fumadocs-ui/contexts/search';
import {
  SearchDialog,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogOverlay,
  SearchDialogFooter,
} from 'fumadocs-ui/components/dialog/search';

const client = flexsearchStaticClient({
  from: '/Noctis-Docs/api/search.json',
});

export default function FlexSearchDialog(props: SharedProps) {
  const { search, setSearch, query } = useDocsSearch({ client });

  return (
    <SearchDialog search={search} onSearchChange={setSearch} isLoading={query.isLoading} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
        </SearchDialogHeader>
        <SearchDialogFooter />
      </SearchDialogContent>
    </SearchDialog>
  );
}
