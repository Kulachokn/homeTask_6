import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import withTheme from "../hoc/withTreme";

const ContactList = ({ contacts, onRemoveContact, theme }) => {
    const { themeConfig, type } = theme;
    return (
    <div
        style={{
            color: themeConfig[type].fontColor,
            background: themeConfig[type].bodybg
        }}>
        <h2>Contacts</h2>
        <ul>
            {contacts.map(({id, name, number}) => (
                <ContactListItem
                    key={id}
                    name={name}
                    number={number}
                    onRemove={() => onRemoveContact(id)}
                />
            ))}
        </ul>
    </div>
    )
};

export default withTheme(ContactList);
