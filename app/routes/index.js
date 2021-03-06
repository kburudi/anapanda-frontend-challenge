import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service task;
  @service store;


  model() {
    return {
      pinned : this.task.tasks.filter(task => task.isPinned && !task.isComplete),
      tasks : this.task.tasks.filter(task => !task.isPinned && !task.isComplete),
    }
  }
}
