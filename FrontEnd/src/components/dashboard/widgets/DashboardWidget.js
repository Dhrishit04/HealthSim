import React, { useState } from 'react';
import styles from './widget.module.scss';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DashboardWidget = () => {
  // Local state to track theme: "light" or "dark"
  const [theme, setTheme] = useState('light');

  // State to manage widget order
  const [widgets, setWidgets] = useState([
    { id: '1', content: 'Medication Reminder', description: 'Stay on top of your medication schedule with timely reminders.' },
    { id: '2', content: 'Steps Tracker', description: 'Track your daily step count and activity level.' },
  ]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    // Note: For global theme toggling, you could use Context API or CSS custom properties
  };

  // Handle drag end for reordering widgets
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(widgets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setWidgets(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={`${styles.widgetContainer} ${theme === 'dark' ? styles.darkTheme : ''}`}>
        <h2 className={styles.widgetTitle}>Widgets</h2>
        <p className={styles.widgetDescription}>
          Manage and view your additional tools, settings, and data insights here.
        </p>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className={styles.themeButton}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>

        <Droppable droppableId="widgets">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className={styles.widgetList}>
              {widgets.map((widget, index) => (
                <Draggable key={widget.id} draggableId={widget.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`${styles.widgetItem} ${theme === 'dark' ? styles.darkWidget : ''}`}
                    >
                      <h3>{widget.content}</h3>
                      <p>{widget.description}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default DashboardWidget;