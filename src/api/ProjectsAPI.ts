/* eslint-disable */
import HttpClient from "services/HttpClient";

const ProjectsAPI = {
  getMeetupList: async () => {
    try {
      const path = `api/projects/meetup`;
      const response = await HttpClient.get(path, {}, {});
      console.log(response);
      return response.data;
    } catch (e) {
      return null;
    }
  },
  getMeetupDetail: async (meetup_id: number) => {
    try {
      const path = `api/projects/meetup/${meetup_id}`;
      const response = await HttpClient.get(path, {}, {});
      console.log(response);
      return response.data;
    } catch (e) {
      return null;
    }
  },
  getCorporateList: async () => {
    try {
      const path = `api/projects/corporate`;
      const response = await HttpClient.get(path, {}, {});
      console.log(response);
      return response.data;
    } catch (e) {
      return null;
    }
  },
};

export default ProjectsAPI;
