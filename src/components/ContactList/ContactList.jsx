export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(item => (
          <li key={item.id}>
            <div>{`${item.name}: ${item.number}`}</div>
            <button
              type="button"
              onClick={() => {
                deleteContact(item.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
