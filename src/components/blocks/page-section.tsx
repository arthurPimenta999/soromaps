interface PageSectionProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export default function PageSection({
  title,
  description,
  actions,
}: PageSectionProps) {
  return (
    <div className="px-8 pt-8 flex flex-row items-end justify-between">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>

      {actions && <div>{actions}</div>}
    </div>
  );
}
