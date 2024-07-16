export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const menus: { items: Item[] }[] = [
  {
    items: [
      {
        name: 'Play',
        slug: 'play',
      },
      {
        name: 'Chat 🤖',
        slug: 'chat',
      },
    ],
  },
];
