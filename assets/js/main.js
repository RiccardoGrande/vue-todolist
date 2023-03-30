

const { createApp } = Vue


createApp({

    data(){
        return{
            newText: '',
            error: null,
            texts:[
                {
                    text:'learn HTML',
                    done: done
                },
                {
                    text:'learn CSS',
                    done: false
                },
                {
                    text:'learn JS',
                    done: done
                },
                {
                    text:'learn PHP',
                    done: false
                },
                
             
            ],

            completed:[]

        }
    },
    methods: {

        addTexts(){

            console.log('add the current text to the list');

            console.log(this.newText);
            console.log(this.nexText.length);

            if (this.nexText.length > 5) {

                this.text.unshift(this.nexText)
                this.nexText= ''
                this.error = null

                if (condition) {
                    
                } else {
                    
                }

            } else{

                this.error = 'Sorry, the item is not done'
            }
            
        },
        completeTask(i){

            this.completeTask.push(this.tasks[i])
            this.tasks.splice(i, 1)

        }

    }
}).mount('#app')