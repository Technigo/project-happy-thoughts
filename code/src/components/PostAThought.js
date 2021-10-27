import React from 'react';

// import { API_URL } from 'utils/urls';

const PostAThought = ({
  newThought,
  onNewThoughtChange,
  onSubmit,
  title,
  placeholder,
}) => {
  //   const [thoughts, setThoughts] = useState([]);
  //   const [newThought, setNewThought] = useState('');

  //   useEffect(() => {
  //     fetch(API_URL)
  //       .then((res) => res.json())
  //       .then((data) => setThoughts(data));
  //   }, []);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     const options = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ message: newThought }),
  //     };

  //     fetch(API_URL, options)
  //       .then((res) => res.json())
  //       .then((data) => setThoughts([data, ...thoughts]));
  //   };

  return (
    <div className='post-a-thought-container'>
      <form onSubmit={onSubmit}>
        <label htmlFor='newThought'>
          <h2>{title}</h2>
          <textarea
            id='newThought'
            name='newThought'
            // cols='50' // 50 characters per line
            // rows='5' // 5 lines
            maxLength='140'
            minLength='5'
            // empty textarea is considered valid even if you have a minlength
            // added required to prevent valid empty textarea
            required
            placeholder={placeholder}
            value={newThought}
            onChange={onNewThoughtChange}
            // eslint-disable-next-line react/jsx-closing-bracket-location
          />
        </label>
        <p className='remaining-chars'>
          Remaining characters: {140 - newThought.length}
        </p>
        <button
          type='submit'
          disabled={newThought.length < 5 || newThought.length > 140}
          // eslint-disable-next-line react/jsx-closing-bracket-location
        >
          <span role='img' aria-label='heart emoji'>
            ❤️
          </span>
          &nbsp; Send Happy Thought &nbsp;
          <span role='img' aria-label='heart emoji'>
            ❤️
          </span>
        </button>
      </form>
    </div>
  );
};

export default PostAThought;
