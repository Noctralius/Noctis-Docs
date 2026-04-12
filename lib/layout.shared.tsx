import { BookOpenIcon, ShieldIcon, GitForkIcon, PaletteIcon } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    links: [
      {
        icon: <BookOpenIcon />,
        text: 'Документация',
        url: '/docs/getting-started',
        active: 'nested-url',
      },
      {
        icon: <ShieldIcon />,
        text: 'Безопасность',
        url: '/docs/security',
        active: 'nested-url',
      },
      {
        icon: <PaletteIcon />,
        text: 'Темы',
        url: '/docs/themes',
        active: 'nested-url',
      },
      {
        type: 'icon',
        label: 'GitHub',
        icon: <GitForkIcon />,
        text: 'GitHub',
        url: `https://github.com/${gitConfig.user}/Noctis`,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
