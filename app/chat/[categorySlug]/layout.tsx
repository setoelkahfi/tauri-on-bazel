import { ClickCounter } from "@/app/_ui/click-counter";
import { TabGroup } from "@/app/_ui/tab-group";
import { getCategories, getCategory } from "@/app/api/categories/getCategories";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const category = await getCategory({ slug: params.categorySlug });
  const categories = await getCategories({ parent: params.categorySlug });

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path={`/feed/${category.slug}`}
          items={[
            {
              text: 'All',
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
