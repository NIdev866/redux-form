import { 
  NESTED_JOB_SECTORS,
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {

    case NESTED_JOB_SECTORS:
      return { ...state, nestedJobSectors: action.payload }

    default:
      return state;
  }
}
