import React, { useState } from 'react';
import '../styles/stories.css'
import { Button, Modal } from 'react-bootstrap';

const storiesData = [
  { id: 1, username: 'user1', type:"image", src: 'https://images.pexels.com/photos/17528251/pexels-photo-17528251/free-photo-of-beauty-swimming-jellyfish.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 2, username: 'user2',type:"video",  src: 'https://images.pexels.com/photos/15862301/pexels-photo-15862301/free-photo-of-woman-with-sunglasses-posing-near-ladder.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 3, username: 'user3',type:"image",  src: 'https://images.pexels.com/photos/12561841/pexels-photo-12561841.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 1, username: 'user1',type:"image",  src: 'https://images.pexels.com/photos/17528251/pexels-photo-17528251/free-photo-of-beauty-swimming-jellyfish.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 2, username: 'user2',type:"image",  src: 'https://images.pexels.com/photos/15862301/pexels-photo-15862301/free-photo-of-woman-with-sunglasses-posing-near-ladder.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 3, username: 'user3',type:"image",  src: 'https://images.pexels.com/photos/12561841/pexels-photo-12561841.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 1, username: 'user1',type:"image",  src: 'https://images.pexels.com/photos/17528251/pexels-photo-17528251/free-photo-of-beauty-swimming-jellyfish.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 2, username: 'user2',type:"image",  src: 'https://images.pexels.com/photos/15862301/pexels-photo-15862301/free-photo-of-woman-with-sunglasses-posing-near-ladder.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 3, username: 'user3',type:"image",  src: 'https://images.pexels.com/photos/12561841/pexels-photo-12561841.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 1, username: 'user1',type:"image",  src: 'https://images.pexels.com/photos/17528251/pexels-photo-17528251/free-photo-of-beauty-swimming-jellyfish.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 2, username: 'user2',type:"image",  src: 'https://images.pexels.com/photos/15862301/pexels-photo-15862301/free-photo-of-woman-with-sunglasses-posing-near-ladder.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 3, username: 'user3',type:"image",  src: 'https://images.pexels.com/photos/12561841/pexels-photo-12561841.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 1, username: 'user1',type:"image",  src: 'https://images.pexels.com/photos/17528251/pexels-photo-17528251/free-photo-of-beauty-swimming-jellyfish.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 2, username: 'user2',type:"image",  src: 'https://images.pexels.com/photos/15862301/pexels-photo-15862301/free-photo-of-woman-with-sunglasses-posing-near-ladder.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { id: 3, username: 'user3',type:"image",  src: 'https://images.pexels.com/photos/12561841/pexels-photo-12561841.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  // Add more stories as needed
];

function Stories() {
    const [currentStory, setCurrentStory] = useState(null);

    const closeStory = () => {
      setCurrentStory(null);
    };
  
    const handleNextStory = () => {
      if (currentStory !== null && currentStory < storiesData.length - 1) {
        setCurrentStory(currentStory + 1);
      }
    };
  
    const handlePrevStory = () => {
      if (currentStory !== null && currentStory > 0) {
        setCurrentStory(currentStory - 1);
      }
    };
  
    const openStory = (story) => {
      setCurrentStory(storiesData.indexOf(story));
    };
  
    return (
      <div className="stories-container">
        <div className="story-list">
          {storiesData.map((story) => (
            <div
              key={story.id}
              className="story-box"
              onClick={() => openStory(story)}
            >
              {story.type === 'image' ? (
                <img src={story.src} alt={`Story ${story.id}`} />
              ) : (
                <video
                  src={story.src}
                  controls
                  width="100"
                  height="100"
                  alt={`Story ${story.id}`}
                />
              )}
            </div>
          ))}
        </div>
        {currentStory !== null && (
          <Modal show={currentStory !== null} onHide={closeStory}>
            <Modal.Header closeButton>
              <Modal.Title>Story {storiesData[currentStory].id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {storiesData[currentStory].type === 'image' ? (
                <img src={storiesData[currentStory].src} alt={`Story ${storiesData[currentStory].id}`} />
              ) : (
                <video
                  src={storiesData[currentStory].src}
                  controls
                  width="320"
                  height="400"
                  alt={`Story ${storiesData[currentStory].id}`}
                />
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeStory}>
                Close
              </Button>
              {currentStory > 0 && (
                <Button variant="primary" onClick={handlePrevStory}>
                  Previous
                </Button>
              )}
              {currentStory < storiesData.length - 1 && (
                <Button variant="primary" onClick={handleNextStory}>
                  Next
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        )}
      </div>
    );
  }

export default Stories;
