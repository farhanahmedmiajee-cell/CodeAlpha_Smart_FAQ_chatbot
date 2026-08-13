const faqData = [
    {
        question: "What is your return policy?",
        answer: "You can return any product within 30 days of purchase with original receipt."
    },
    {
        question: "How long does shipping take? When will I get my order package delivery time?",
        answer: "Standard shipping takes 3 to 5 business days."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to over 50 countries worldwide."
    },
    {
        question: "Which countries do you ship to? What are the shipping countries? List of countries?",
        answer: "We ship to: USA, Canada, UK, Germany, France, Italy, Spain, Netherlands, Belgium, Austria, Sweden, Norway, Denmark, Poland, Australia, Japan, Singapore, India, Mexico, Brazil, UAE, and many more. For a complete list, please contact our support team."
    },
    {
        question: "How can I track my order?",
        answer: "You will receive a tracking link via email once your order has shipped."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept Visa, MasterCard, PayPal, and Apple Pay."
    },
    {
        question: "How do I cancel or change my order?",
        answer: "You can cancel or modify your order within 2 hours of placing it by contacting our support team."
    },
    {
        question: "What should I do if I receive a damaged item?",
        answer: "Please contact support immediately with photos of the damaged item and we will arrange a replacement or refund."
    },
    {
        question: "Do I need to create an account to place an order?",
        answer: "No, you can check out as a guest, but creating an account helps you track orders and checkout faster."
    },
    {
        question: "How can I contact customer support?",
        answer: "You can reach us via email at support@example.com or call us at +1-800-555-0199."
    },
    {
        question: "What are your customer service operating hours?",
        answer: "Our customer support team is available Monday to Friday, 9 AM to 6 PM EST."
    },
    {
        question: "Do you offer discounts or promo codes?",
        answer: "Yes, you can sign up for our newsletter to receive an instant 10% discount on your first order."
    },
    {
        question: "Are your products covered by a warranty?",
        answer: "Yes, all our electronics and hardware items come with a 1-year standard warranty."
    },
    {
        question: "How do I reset my account password?",
        answer: "Click on 'Forgot Password' on the login page and enter your registered email to receive a reset link."
    },
    {
        question: "Is my personal and payment information secure?",
        answer: "Yes, we use SSL encryption and secure payment gateways to ensure your data is completely protected."
    },
    {
        question: "Can I change my shipping address after ordering?",
        answer: "You can change your shipping address within 1 hour of placing the order before it is processed for dispatch."
    },
    {
        question: "Where are your physical store locations?",
        answer: "Currently, we operate purely online to keep prices low, but we ship directly to your address."
    },
    {
        question: "What happens if my package is lost?",
        answer: "If your package hasn't arrived within the estimated time, contact us and we will open an investigation with the courier."
    },
    {
        question: "Do you offer gift wrapping options?",
        answer: "Yes, you can select the gift wrapping option at checkout for a small additional fee."
    },
    {
        question: "How long does it take to process a refund?",
        answer: "Once we receive your returned item, refunds are processed within 5 to 7 business days to your original payment method."
    },
    {
        question: "Can I pre-order out-of-stock items?",
        answer: "Yes, if pre-order is available for an item, a 'Pre-Order' button will be visible on the product page."
    },
    {
        question: "What is the shipping cost? How much do you charge for shipping?",
        answer: "Shipping costs vary based on location and weight. Standard shipping is FREE on orders over $50. For smaller orders, it starts from $4.99."
    },
    {
        question: "Do you offer express or faster shipping? Rush delivery?",
        answer: "Yes! We offer Express Shipping (1-2 business days) for $15.99 and Overnight Shipping for $24.99. Choose at checkout."
    },
    {
        question: "What is your exchange policy? Can I exchange for different size or color?",
        answer: "Yes, you can exchange items within 30 days. Contact our support team with your order number and preferred exchange item."
    },
    {
        question: "Do you have a size guide? How do I know the right size?",
        answer: "Yes, each product page has a detailed size guide with measurements in inches and centimeters. You can also contact us for personalized sizing help."
    },
    {
        question: "What about bulk orders or corporate purchases? Do you offer wholesale?",
        answer: "Yes, we offer special pricing for bulk orders (10+ items). Contact our bulk sales team at bulk@example.com for a custom quote."
    },
    {
        question: "How can I check product reviews? Are there customer ratings?",
        answer: "You can see verified customer reviews and star ratings on every product page. Genuine reviews from verified buyers help you decide."
    },
    {
        question: "What happens if I receive a defective product? Quality guarantee?",
        answer: "We offer a 100% satisfaction guarantee. If you receive a defective item, we'll replace or refund it immediately within 30 days."
    },
    {
        question: "Is there a minimum order amount? What is the minimum purchase?",
        answer: "No minimum order! You can purchase a single item. However, free shipping applies on orders over $50."
    },
    {
        question: "Do you have a mobile app? How can I order from my phone?",
        answer: "Yes! Download our mobile app from iOS App Store and Google Play Store for exclusive app-only deals and easier checkout."
    },
    {
        question: "How about seasonal sales and discounts? When is the next sale?",
        answer: "We have sales during major holidays: Black Friday (25-40% off), Cyber Monday, and seasonal clearance sales. Subscribe to our newsletter for early notifications!"
    },
    {
        question: "What about customs duties and import taxes for international orders?",
        answer: "Customs duties and import taxes vary by country and are buyer's responsibility. We'll provide all necessary documentation for customs clearance."
    },
    {
        question: "Do you have store credit or gift cards?",
        answer: "Yes! We offer digital and physical gift cards in denominations of $10, $25, $50, and $100. Perfect for gifts!"
    },
    {
        question: "Can I subscribe for regular/recurring orders? Automatic reorder?",
        answer: "Yes! Subscribe to products for automatic delivery every month and save 10% on each subscription order. Manage or cancel anytime."
    },
    {
        question: "What is your environmental policy? Are you eco-friendly? Sustainable packaging?",
        answer: "Yes, we use 100% recyclable packaging materials and partner with carbon-neutral shipping providers. We're committed to sustainability!"
    },
    {
        question: "How do I leave feedback or report an issue? Customer complaints?",
        answer: "You can submit feedback through your account dashboard or email us at feedback@example.com. We take all feedback seriously and respond within 24 hours."
    },
    {
        question: "Okey",
        answer: "Thank you sir. i am here to solve you any type of questions about that ! "
    },
    {
        question: "Hi",
        answer: "Hello Sir/Mam, How can I help you today?"
    },
    {
        question: "Hello",
        answer: "Hello Sir/Mam, How can I help you today?"
    },
    {
        question: "Do you Have Any Promo-CODE for this product?",
        answer: "Yes sir, Here is your One Time promocode 32598."
    },
    {
        question: "Thanks, thank you",
        answer: "Your most welcome 😊"
    },
    {
        question: "Can I cancle this Order / i want to cancle this order right now!",
        answer: "Sorry sir, once your order is shipped i cann't do anything ☹️"
    },
    {
        question: "i want to know the reale time location of my order",
        answer: "You order is tracking... It is now in LA"   
    },
    {
        question: "Tell my your Author name, who build you?",
        answer: "He is Farhan Ahmed Miajee"   
    },
    {
        question: "For what he make you ? ",
        answer: "For CodeAlpha Task as Artificial Inteligence Intern"   
    }
];


const stopWords = new Set([
    "is", "your", "does", "do", "you", "can", "i", 
    "a", "an", "the", "my", "of", "to", "are", "if", "or", "me", "in"
]);


function preprocess(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/gi, '') 
        .split(/\s+/) 
        .filter(word => word.length > 0 && !stopWords.has(word)); 
}
function createVector(tokens, vocabulary) {
    const vector = new Array(vocabulary.length).fill(0);
    tokens.forEach(token => {
        const index = vocabulary.indexOf(token);
        if (index !== -1) {
            vector[index]++;
        }
    });
    return vector;
}

function cosineSimilarity(vecA, vecB) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i];
        normA += vecA[i] * vecA[i];
        normB += vecB[i] * vecB[i];
    }

    if (normA === 0 || normB === 0) return 0;
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

function getBestAnswer(userQuery) {
    const userTokens = preprocess(userQuery);

    if (userTokens.length === 0) {
        return "I'm sorry, I couldn't understand that. Please rephrase your question.";
    }

    let maxSimilarity = 0;
    let bestMatchIndex = -1;

    faqData.forEach((item, index) => {
        const faqTokens = preprocess(item.question);
        const vocabulary = Array.from(new Set([...userTokens, ...faqTokens]));
        
        const userVector = createVector(userTokens, vocabulary);
        const faqVector = createVector(faqTokens, vocabulary);
        
        const similarity = cosineSimilarity(userVector, faqVector);

        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            bestMatchIndex = index;
        }
    });

    if (maxSimilarity > 0.05) {
        return faqData[bestMatchIndex].answer;
    } else {
        return "I'm sorry, I don't have information on that. Please contact our support at support@example.com.";
    }
}
function sendMessage(suggestedQuestion) {
    const inputField = document.getElementById("userInput");
    const userText = suggestedQuestion || inputField.value.trim();

    if (userText === "") return;

    appendMessage(userText, 'user-message');
    inputField.value = "";
    
    const suggestionsContainer = document.querySelector('.suggestions-container');
    if (suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
    setTimeout(() => {
        const botAnswer = getBestAnswer(userText);
        appendMessage(botAnswer, 'bot-message');
    }, 300);
}

function appendMessage(text, className) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${className}`;
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv); 
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}