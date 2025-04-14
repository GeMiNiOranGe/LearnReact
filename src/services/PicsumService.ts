import { PICSUM_BASE_URL } from '@/config';
import { PicsumPhoto } from '@/types';
import axios from 'axios';

class PicsumService {
  public static async getPhotos(): Promise<PicsumPhoto[]> {
    const response = await axios.get<PicsumPhoto[]>(
      `${PICSUM_BASE_URL}/v2/list`,
    );
    return response.data;
  }
}

export default PicsumService;
