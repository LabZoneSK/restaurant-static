module.exports = async function(context, req) {
    context.res = {
        body: {
            text: "API says: Fusce dapibus, tellus ac cursus commodo."
        }
    };
};