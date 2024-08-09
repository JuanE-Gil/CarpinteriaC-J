import React from 'react';

interface Props {
  route: string;
  icon: string;
  title: string;
  active?: boolean;
}

const ListItem: React.FC<Props> = ({ route, icon, title, active = false }) => {
  return (
    <li
      className={`space-x-2 h-12 px-4 py-2 ${active ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} rounded-md`}
      style={{
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '48px',
        padding: '0 16px'
      }}
    >
      <span
        className={`${active ? 'text-white' : 'text-gray-700'}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          height: '24px'
        }}
      >
        <img
          src={icon}
          alt={title}
          className={`${active ? 'filter invert' : ''}`}
        />
      </span>
      <a
        href={route}
        className={`text-base ${active ? 'text-white' : 'hover:text-blue-500'} flex-1 text-center`}
        style={{
          textDecoration: 'none',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold'
        }}
      >
        {title}
      </a>
    </li>
  );
};

export default ListItem;
