type MItem = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

type Props = {
  item: MItem;
};
const MenuItem = ({ item }: Props) => {
  const { img, title, desc, price } = item;

  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
