import './AppMenuDropdown.css';
import AppMenuItem from '../AppMenuItem/AppMenuItem';

import {Link} from 'react-router-dom';

import {useDispatch} from 'react-redux';
import {appDropdownAction} from '../../redux/appDropdown/appDropdownSlice';

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {useState} from 'react';


const googleApps = [
  {
    id: 'calendar',
    title: 'Calendar',
    alt: 'google-calendar',
    image: '/images/calendar.png',
    link: '/calendar',
  },
  {
    id: 'chats',
    title: 'Chats',
    alt: 'google-chats',
    image: '/images/chats.png',
    link: '/chats',
  },
  {
    id: 'chrome',
    title: 'Chrome',
    alt: 'google-chrome',
    image: '/images/chrome.png',
    link: '/chrome',
  },
  {
    id: 'documents',
    title: 'Documents',
    alt: 'google-documents',
    image: '/images/documents.png',
    link: '/documents',
  },
  {
    id: 'drive',
    title: 'Drive',
    alt: 'google-drive',
    image: '/images/drive.png',
    link: '/drive',
  },
  {
    id: 'duo',
    title: 'Duo',
    alt: 'google-duo',
    image: '/images/duo.png',
    link: '/duo',
  },
  {
    id: 'gmail',
    title: 'Gmail',
    alt: 'google-gmail',
    image: '/images/gmail.png',
    link: '/gmail',
  },
  {
    id: 'keep',
    title: 'Keep',
    alt: 'google-keep',
    image: '/images/keep.png',
    link: '/keep',
  },
  {
    id: 'maps',
    title: 'Maps',
    alt: 'google-maps',
    image: '/images/maps.png',
    link: '/maps',
  },
  {
    id: 'meets',
    title: 'Meets',
    alt: 'google-meets',
    image: '/images/meets.png',
    link: '/meets',
  },
  {
    id: 'news',
    title: 'News',
    alt: 'google-news',
    image: '/images/news.png',
    link: '/news',
  },
  {
    id: 'photo',
    title: 'Photo',
    alt: 'google-photo',
    image: '/images/photo.png',
    link: '/photo',
  },
  {
    id: 'sheets',
    title: 'Sheets',
    alt: 'google-sheets',
    image: '/images/sheets.png',
    link: '/sheets',
  },
  {
    id: 'slides',
    title: 'Slides',
    alt: 'google-slides',
    image: '/images/slides.png',
    link: '/slides',
  },
  {
    id: 'tensor-flow',
    title: 'Tensor Flow',
    alt: 'google-tensor-flow',
    image: '/images/tensor-flow.png',
    link: '/tensor-flow',
  },
  {
    id: 'youtube',
    title: 'Youtube',
    alt: 'google-youtube',
    image: '/images/youtube.png',
    link: '/youtube',
  },
  {
    id: 'firebase',
    title: 'Firebase',
    alt: 'google-firebase',
    image: '/images/firebase.png',
    link: '/firebase',
  },
];

const AppMenuDropdown = () => {
  const [apps, setApps] = useState(googleApps);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(apps);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setApps(items);
  };

  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(appDropdownAction.closeModal());
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <div
            className="dropdown"
            onClick={closeModal}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {googleApps.map(({id, title, alt, image, link}, index)=> {
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
  );
};

export default AppMenuDropdown;
