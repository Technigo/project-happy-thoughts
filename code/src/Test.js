  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // window.alert(`the current counter is ${counter}`);
  }, [likes]);

  const handleLikesIncreaseButtonClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <p> ❤ x {likes}</p>
      <button onClick={handleLikesIncreaseButtonClick} type="button">
        ❤
      </button>
    </div>