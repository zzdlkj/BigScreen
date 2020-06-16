import { AuthResource } from './resource'
export default {
  localLogin: function (data) {
    return AuthResource.save(data)
  }

}
