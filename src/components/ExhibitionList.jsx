import ExhibitionItem from "./ExhibitionItem";
import styles from "./exhibitionList.module.css";

function ExhibitionList({ data }) {
  return (
    <ul className={styles.exhibitionWrapper}>
      {data.map((data) => (
        <ExhibitionItem key={data.id} data={data} />
      ))}
    </ul>
  );
}

export default ExhibitionList;
