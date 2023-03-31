

const { createApp } = Vue


createApp({

    data(){
        return{
            newText:'',
            error: null,
            texts:[
                {
                    text:'learn HTML',
                    done: true
                },
                {
                    text:'learn CSS',
                    done: false
                },
                {
                    text:'learn JS',
                    done: true
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
            console.log(this.newText.length);

            if (this.newText.length > 5) {

                const newMessage = {
                    text:this.newText,
                    done: false
                };

                this.texts.unshift(newMessage)
                this.newText= ''
                this.error = null

            } else{

                this.error = 'Sorry, task is not done'
            }
            
        },
        completeTask(i){

            this.completeTask.push(this.texts[i])
            this.texts.splice(i, 1)

        }

            
        }
       
    }
).mount('#app')
