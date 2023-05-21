function talk(){
    var know = {
    "hello": "Hello, my friend",
    "hi": "Hello, my friend",
    "hey": "Hello, my friend",
    "who are you" : "Think of me as your friend ",
    "how are you" : "Good :), how are you",
    "good":"Great, but if you have anything in mind you can share with me ",
    "why life is hard": "I know life can be hard but Life can indeed be beautiful and filled with moments of joy, wonder, and fulfillment. Despite the challenges and hardships we may face, there are countless reasons why life is beautiful: Connections and relationships: Building and nurturing meaningful relationships with family, friends, and loved ones is one of life's greatest treasures. The bonds we form, the love we experience, and the support we receive from others enrich our lives and make it beautiful. Nature and the world around us: The beauty of nature, the wonders of the universe, and the diversity of the world we live in can be awe-inspiring. From breathtaking landscapes to the intricacies of the natural world, these elements remind us of the beauty and marvels that exist. Experiences and adventures: Life offers us opportunities to embark on exciting adventures, explore new places, try new activities, and engage in meaningful experiences. These experiences can bring joy, create memories, and expand our perspectives. Personal growth and achievements: Overcoming challenges, setting goals, and achieving personal growth and success are deeply rewarding experiences. The sense of accomplishment, self-improvement, and personal fulfillment that come from reaching milestones and realizing our potential can make life incredibly beautiful. ",
    "am I ugly": "Totally not, you are so beautiful. Physical appearance does not define your worth as an individual. Your value lies in your unique qualities, talents, personality, and how you treat others. It's important to focus on building self-confidence, practicing self-care, and surrounding yourself with positive influences that support your well-being. If you're feeling self-conscious about your appearance, it may be helpful to talk to a trusted friend, family member, or a mental health professional who can provide support and guidance.",
    "i don't want to live": "I'm really sorry to hear that you're feeling this way, but you know, I am here for you no matter what. You are precious and important. You are great. Everyday is a new opportunity, YOU GOT THIS, MY FRIEND!!",
    "my family doesn't love me": "I'm really sorry to hear that you're feeling this way, but you should put yourself first. You need to love yourself because in the end it will be you. And I know you are strong and you got this!! ",
    "bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }