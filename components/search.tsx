'use client';

import { OramaCloud } from '@orama/core';
import type { SharedProps } from 'fumadocs-ui/contexts/search';
import { useDocsSearch } from 'fumadocs-core/search/client';
import type { SortedResult } from 'fumadocs-core/search';
import { createContentHighlighter } from 'fumadocs-core/search';
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

const orama = new OramaCloud({
  projectId: process.env.NEXT_PUBLIC_ORAMA_PROJECT_ID!,
  apiKey: process.env.NEXT_PUBLIC_ORAMA_API_KEY!,
});

function oramaClient() {
  return {
    deps: [orama] as const,
    async search(query: string): Promise<SortedResult[]> {
      if (!query) return [];

      const highlighter = createContentHighlighter(query);

      const result = await orama.search({
        term: query,
        limit: 20,
      });

      if (!result?.hits) return [];

      const list: SortedResult[] = [];
      const seenPages = new Set<string>();

      for (const hit of result.hits) {
        const doc = hit.document as Record<string, string>;
        const pageId = doc.page_id || doc.url || '';
        const url = doc.url || '';

        if (!seenPages.has(pageId)) {
          seenPages.add(pageId);
          list.push({
            id: pageId,
            type: 'page',
            content: highlighter.highlightMarkdown(doc.title || ''),
            url,
          });
        }

        list.push({
          id: doc.id || hit.id,
          type: doc.content === doc.section ? 'heading' : 'text',
          content: highlighter.highlightMarkdown(doc.content || doc.section || ''),
          url: doc.section_id ? `${url}#${doc.section_id}` : url,
        });
      }

      return list;
    },
  };
}

export default function SearchDialog(props: SharedProps) {
  const { search, setSearch, query } = useDocsSearch({
    client: oramaClient(),
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
