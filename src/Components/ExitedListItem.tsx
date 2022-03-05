export type ExitedListItemProps = { name: string; technology?: string };

export const ExitedListItem = ({
  name,
  technology = "JavaScript",
}: ExitedListItemProps) => {
  return (
    <div>
      <p>
        {name} is very exited about learning {technology}!
      </p>
    </div>
  );
};
