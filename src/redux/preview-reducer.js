const SET_PREVIEW = 'SET_PREVIEW';

let initialState = {
  bannerTitle: null,
  bannerType: null,
  verticalImage: null,
  gorizontalImage: null,
  targetLink: null
};

const previewReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_PREVIEW: {
      return {
        ...state,
        bannerTitle: action.bannerTitle,
        bannerType: action.bannerType,
        verticalImage: action.verticalImage,
        gorizontalImage: action.gorizontalImage,
        targetLink: action.targetLink
      }
    }
    default:
      return state;
  }
}

export const setPreview = (bannerTitle, bannerType, verticalImage,gorizontalImage, targetLink ) => ({type: SET_PREVIEW, bannerTitle, bannerType, verticalImage, gorizontalImage,targetLink });
export default previewReducer;