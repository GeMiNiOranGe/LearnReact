import axios from 'axios';

import { PICSUM_BASE_URL } from '@/config';
import type { PicsumPhoto } from '@/types';

class PicsumService {
  public static async getPhotos(page: number = 1): Promise<PicsumPhoto[]> {
    const params = new URLSearchParams({
      limit: '12',
      page: `${page}`,
    });
    const response = await axios.get<PicsumPhoto[]>(
      `${PICSUM_BASE_URL}/v2/list?${params}`,
    );
    return response.data;
  }
}

export default PicsumService;
