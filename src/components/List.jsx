import Person from './Person';
export const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        const { id } = person;
        return (
          <div key={id}>
            <Person {...person} />
          </div>
        );
      })}
    </section>
  );
};
