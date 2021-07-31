export const incNumber = (value) => {
    return {
        payload: value,
        type: 'INCREMENT',
    };
};

export const decNumber = () => {
  return { type: 'DECREMENT' };
};
