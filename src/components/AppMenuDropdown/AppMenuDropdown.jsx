import './AppMenuDropdown.css';
import AppMenuItem from '../AppMenuItem/AppMenuItem';

import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';


import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {useState, useEffect} from 'react';

// import {appDropdownAction} from '../../redux/appDropdown/appDropdownSlice';
import {appDropdownAction} from '../../redux/appDropdown/appDropdownSlice';

const AppMenuDropdown = () => {
  const [apps, setApps] = useState([]);
  const dispatch = useDispatch();
  const toggleApp = () => {
    dispatch(appDropdownAction.toggleApp());
  };

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch('https://clone-a2884-default-rtdb.europe-west1.firebasedatabase.app/apps.json');
      const responseData = await response.json();
      const data = [];
      // eslint-disable-next-line guard-for-in
      for (const key in responseData) {
        data.push({
          id: key,
          title: responseData[key].title,
          alt: responseData[key].alt,
          link: responseData[key].link,
          image: responseData[key].image,
        });
      }
      setApps(data);
    };
    fetchData();
  }, []);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(apps);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setApps(items);
  };

  return (
    <div className="dropdown" onClick={toggleApp}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              className="wrapper"
              {...provided.droppableProps}
              ref={provided.innerRef}
              onClick={(e)=>{
                e.stopPropagation();
              }}
            >
              {apps.map(({id, title, alt, image, link}, index)=> {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <Link
                        to={link}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <AppMenuItem
                          image={image}
                          alt={alt}
                          title={title}
                        />
                      </Link>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default AppMenuDropdown;
