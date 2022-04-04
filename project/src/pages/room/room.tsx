import React from 'react';
import Header from '../../components/header/header';
import RoomMain from '../../components/room-main/room-main';

function Room () {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <RoomMain/>
      </main>
    </div>
  );
}

export default Room;
