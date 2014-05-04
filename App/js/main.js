var _    = require( 'underscore' );
var Todo = require( './js/todo' );

var demo = new Vue({
    el: '#todo',
    data: {
        title: 'MiniTodo',
        newTodoName: '',
        todos: []
    },
    methods: {
        addTodo: function () {
            if ( this.newTodoName === '' ) return;
            this.todos.push( new Todo( this.newTodoName ) );
            this.newTodoName = '';
        },
        removeTodo: function ( data ) {
            this.todos.splice( data.$index, 1 );
        },
        removeAll: function () {
            this.todos = _.filter( this.todos, function ( todo ) { return todo.done === false; } );
        }
    }
})