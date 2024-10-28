const getRandomHole = (holes) => {
    return holes[Math.floor(Math.random() * holes.length)];
};

export default getRandomHole;
