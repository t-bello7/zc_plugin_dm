import { SubscribeToChannel } from '@zuri/control';
export default function centrifugeClient(room_id, centrifigoCallback) {
  return SubscribeToChannel(room_id, centrifigoCallback);
}
