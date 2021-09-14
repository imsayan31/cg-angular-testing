import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(() => {
    component = new VoteComponent();
  });
  it('Should increment the value when upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('Should decrement the value when downvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
