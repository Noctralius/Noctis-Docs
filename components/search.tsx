'use client';

import { OramaCloud } from '@orama/core';
import OramaSearchDialog from 'fumadocs-ui/components/dialog/search-orama';
import type { SharedProps } from 'fumadocs-ui/contexts/search';

const client = new OramaCloud({
  projectId: process.env.NEXT_PUBLIC_ORAMA_PROJECT_ID!,
  apiKey: process.env.NEXT_PUBLIC_ORAMA_API_KEY!,
});

export default function SearchDialog(props: SharedProps) {
  return <OramaSearchDialog client={client} {...props} />;
}
