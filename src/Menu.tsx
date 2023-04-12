import MenuItem from "./MenuItem";
type MItem = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};
type Props = {
  items: MItem[];
};

const Menu = ({ items }: Props) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} item={menuItem} />;
      })}
    </div>
  );
};

export default Menu;
