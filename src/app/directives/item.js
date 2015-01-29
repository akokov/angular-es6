class ItemDirective {

    constructor($interval, $timeout) {
        this.template = '<div class="item"><img ng-src="{{ model.image }}" /></div>';
        this.restrict = 'E';
        this.replace = true;
        this.scope = {
            model: '='
        };

        this.$interval = $interval;
        this.$timeout = $timeout;
    }

    compile(tElement) {

        tElement.css('position', 'absolute');
        tElement.css('opacity', '0');
        tElement.css('left', (window.innerWidth / 2 - 150) + 'px');
        tElement.css('top', (window.innerHeight / 2 - 150) + 'px');

    }

    link(scope, element) {

        var interval = Math.random() * 500 + 800;
        this.$timeout(() => element.css('opacity', '1'), 500);
        this.$interval(() => this.move(element), interval);

    }

    move(element) {
        var newPos = this.getNewPosition();
        element.css('left', (newPos.x - 150) + 'px');
        element.css('top', (newPos.y - 150) + 'px');
    }

    getNewPosition() {
        var width = window.innerWidth,
            height = window.innerHeight;

        return {
            x: Math.random() * width,
            y: Math.random() * height
        };
    }
}

register.directive('item', ItemDirective);