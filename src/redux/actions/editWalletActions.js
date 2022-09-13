import { REMOVE_DATA } from '.';

const removeData = (id) => ({
  type: REMOVE_DATA,
  id,
});

export default removeData;
