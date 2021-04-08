const getVoteCount=(votes)=>{
    const {upvotes,downvotes}=votes;
    return upvotes-downvotes;
}