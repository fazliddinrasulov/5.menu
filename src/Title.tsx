type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <div className="title">
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
