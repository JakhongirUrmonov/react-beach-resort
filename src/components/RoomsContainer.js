import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomsContainer({context}){
    const {loading, sortedRooms, rooms} = context;
    return (
        <>
            <RoomsFilter rooms = {rooms}/>
            <RoomsList rooms = {sortedRooms}/>
        </>
    );
}

export default withRoomConsumer(RoomsContainer)










// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import {RoomConsumer} from '../context'
// import Loading from './Loading'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//                 {value => {
//                     const {loading,sortedRooms,rooms} = value;
//                     console.log(value);
//                     return (
//                         <div>
//                             rooms container
//                             <RoomsFilter rooms = {rooms}/>
//                             <RoomsList rooms = {sortedRooms}/>
//                         </div>
//                     );
//                 }}
//         </RoomConsumer>  
//     )
// }
