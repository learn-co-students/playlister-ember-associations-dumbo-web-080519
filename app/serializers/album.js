import DS from 'ember-data';

// export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
//   attrs: {
//     songs: {serialize: 'records'}
//   }
// });

import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    songs: {serialize: 'records'}
  }
});
