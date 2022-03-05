import { Bordered } from "./Bordered";
import { ExitedListItem, ExitedListItemProps } from "./ExitedListItem";

type ExitedListProps = { items: ExitedListItemProps[] };
export const ExitedList = ({ items }: ExitedListProps) => (
  <>
    { items.map(({ name, technology }) => (
          <Bordered>
            <ExitedListItem name={name} technology={technology} />
          </Bordered>
        ))
      }
  </>
);
