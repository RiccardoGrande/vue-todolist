

const { createApp } = Vue


createApp({

    data(){
        return{
            
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


            
            if (done === true) {
                    
                    this.text =

            } else{

                this.error = 'Sorry, the item is not done'
            }

            
        }
       
    }
}).mount('#app')