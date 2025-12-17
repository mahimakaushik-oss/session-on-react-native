# Session Preparation Checklist

## 24 Hours Before Session

### Technical Setup
- [ ] Install Node.js (v16+)
- [ ] Install VS Code with extensions:
  - React Native Tools
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
- [ ] Test Expo CLI: `npx create-expo-app test-app`
- [ ] Install Expo Go app on your phone
- [ ] Test screen sharing and microphone
- [ ] Prepare backup device/hotspot

### Content Preparation
- [ ] Review SESSION_GUIDE.md thoroughly
- [ ] Test all code examples in `/examples` folder
- [ ] Prepare demo app ahead of time
- [ ] Bookmark important documentation pages
- [ ] Create Zoom/Teams meeting link
- [ ] Set up timer/clock for time management

### Materials to Share
- [ ] SESSION_GUIDE.md (this session plan)
- [ ] QUICK_REFERENCE.md (student handout)
- [ ] All code examples from `/examples` folder
- [ ] Installation guide for students
- [ ] Resource links document

---

## 1 Hour Before Session

### Environment Check
- [ ] Open VS Code in a clean directory
- [ ] Have Terminal ready (2-3 tabs)
- [ ] Close unnecessary applications
- [ ] Turn off notifications (Do Not Disturb mode)
- [ ] Test internet connection
- [ ] Have water nearby
- [ ] Clear browser cache if doing web demos

### Demo Setup
- [ ] Create fresh Expo project: `npx create-expo-app DemoApp`
- [ ] Test it runs: `npx expo start`
- [ ] Open Expo Go on your phone
- [ ] Verify you can see live preview
- [ ] Prepare fallback: Screenshots of expected output

### Final Checks
- [ ] Review opening hook and introduction
- [ ] Set timer app to track sections
- [ ] Open SESSION_GUIDE.md on second monitor
- [ ] Have QUICK_REFERENCE.md ready to share
- [ ] Test screen sharing one final time

---

## Session Flow Checklist

### Opening (5 mins)
- [ ] Welcome students
- [ ] Brief self-introduction
- [ ] Session agenda overview
- [ ] Set expectations: "Interactive, hands-on, ask questions anytime"
- [ ] Quick poll: Experience level check

### Part 1: Fundamentals (30 mins)
- [ ] What is React Native? (5 mins)
  - [ ] Opening hook question
  - [ ] Key points covered
  - [ ] Show Instagram example
  - [ ] Translator analogy explained

- [ ] How React Native Works (5 mins)
  - [ ] Bridge architecture diagram
  - [ ] Three threads explained
  - [ ] Show flow visualization
  - [ ] Mention new architecture
  - [ ] Answer "why not native?" question

- [ ] What We Do With React Native (5 mins)
  - [ ] Real-world examples shown
  - [ ] When to use discussed
  - [ ] When NOT to use discussed

- [ ] Requirements & Setup (8 mins)
  - [ ] Prerequisites listed
  - [ ] Show node/npm versions
  - [ ] Expo vs CLI explained
  - [ ] Poll about installations

- [ ] Core Concepts (12 mins)
  - [ ] Component mapping shown
  - [ ] Styling differences explained
  - [ ] Native modules mentioned
  - [ ] Hot reloading demo

### Part 2: React vs RN (15 mins)
- [ ] Differences table reviewed
- [ ] Similarities highlighted
- [ ] Code comparison shown
- [ ] Questions answered

### Break (5 mins)
- [ ] Announce 5-minute break
- [ ] Ask students to have Node.js ready

### Part 3: Hands-on Coding (45 mins)
- [ ] First App Creation (10 mins)
  - [ ] Live coding: Create Expo app
  - [ ] Explain project structure
  - [ ] Modify App.js together
  - [ ] npm vs npx explained
  - [ ] Students follow along

- [ ] Tab Navigation (10 mins)
  - [ ] Install dependencies
  - [ ] Create tab navigator
  - [ ] Show multiple screens
  - [ ] Customize icons
  - [ ] Students try adding third tab

- [ ] Notification App (15 mins)
  - [ ] Build notification list
  - [ ] Add state management
  - [ ] Implement interactions
  - [ ] Show Alert API
  - [ ] Explain FlatList

- [ ] Props Demo (10 mins)
  - [ ] Simple props example
  - [ ] Function props (callbacks)
  - [ ] Complex props
  - [ ] Call by value vs reference
  - [ ] Interactive exercise

### Part 4: Advanced Topics (20 mins)
- [ ] Redux Introduction (10 mins)
  - [ ] When to use Redux
  - [ ] Basic setup shown
  - [ ] Slice example
  - [ ] useSelector/useDispatch
  - [ ] Store configuration

- [ ] Navigation Deep Dive (5 mins)
  - [ ] Navigation types
  - [ ] Programmatic navigation
  - [ ] Tab switching demo

- [ ] npm/npx & CLI (5 mins)
  - [ ] npm commands reference
  - [ ] npx benefits explained
  - [ ] Common RN CLI commands

### Part 5: Wrap-up (10 mins)
- [ ] Best Practices Review
  - [ ] Common mistakes
  - [ ] Performance tips
  - [ ] Security considerations

- [ ] Swift vs JavaScript (Bonus)
  - [ ] Quick comparison table
  - [ ] Code examples
  - [ ] When to learn Swift

- [ ] Q&A Session
  - [ ] Open floor for questions
  - [ ] Address specific concerns
  - [ ] Clarify confusing topics

- [ ] Closing
  - [ ] Share resources
  - [ ] Share code examples
  - [ ] Feedback form
  - [ ] Next steps guidance
  - [ ] Thank students

---

## During Session - Best Practices

### Time Management
- Set visible timer for each section
- Stick to schedule (be ruthless)
- If running over, skip examples not code
- Save extra content for Q&A

### Engagement Techniques
- Ask questions every 5-10 minutes
- Use "thumbs up if following" checks
- Encourage students to type along
- Acknowledge good questions publicly
- Use chat for quick polls

### Handling Issues

**Code Doesn't Work:**
- Don't panic, debug together (learning opportunity)
- Have working version ready to paste
- Explain what went wrong
- Move on if >2 minutes stuck

**Student Can't Follow:**
- Offer to help after session
- Share screen recordings later
- Provide working code examples
- Encourage questions in chat

**Running Behind:**
- Skip theoretical deep dives
- Focus on live coding
- Combine similar topics
- Share detailed notes instead

**Running Ahead:**
- Add more interactive exercises
- Take more questions
- Show additional examples
- Deeper dive into Redux/Navigation

### Interactive Elements
- "Let's try this together"
- "What do you think will happen?"
- "Anyone know what this does?"
- "Common mistake here is..."
- "Pro tip: ..."

---

## Post-Session Checklist

### Immediate (Within 1 Hour)
- [ ] Share all code examples
- [ ] Share SESSION_GUIDE.md
- [ ] Share QUICK_REFERENCE.md
- [ ] Share recording link (if recorded)
- [ ] Send resource links
- [ ] Share feedback form

### Follow-up (Within 24 Hours)
- [ ] Answer questions from chat
- [ ] Send clarifications if needed
- [ ] Share additional resources
- [ ] Thank students for participation

### Review (For Next Time)
- [ ] Note what worked well
- [ ] What to improve
- [ ] Timing adjustments needed
- [ ] Examples to add/remove
- [ ] Student feedback review

---

## Emergency Backup Plan

### If Internet Fails
- Have offline Expo app ready
- Use phone's hotspot
- Switch to theoretical discussion
- Show pre-recorded demos

### If Screen Share Fails
- Use phone camera to show screen
- Share code via GitHub Gist
- Describe code verbally
- Send working examples via chat

### If Demo Crashes
- Have working code ready to paste
- Show screenshots of expected output
- Explain concept without demo
- Provide working example to test later

---

## Student Prerequisites Email Template

```
Subject: React Native Session - Prerequisites

Hi everyone!

Excited for tomorrow's React Native session! Please install these before we start:

Required:
1. Node.js (v16+): https://nodejs.org
2. VS Code: https://code.visualstudio.com
3. Expo Go app on your phone:
   - iOS: App Store
   - Android: Play Store

Optional but recommended:
- VS Code Extensions:
  - React Native Tools
  - ES7+ React/Redux snippets

Test your setup:
```bash
node --version    # Should show v16+
npm --version
npx create-expo-app TestApp
```

No prior mobile development experience needed, but basic React knowledge helps!

See you tomorrow!
```

---

## Key Talking Points to Remember

### Opening Impact
"By the end of this session, you'll have built 3 working mobile apps"

### React Native Value Prop
"Write once in JavaScript, get real native apps for iOS AND Android"

### Bridge Architecture
"React Native is a translator between your JavaScript and the phone's native language"

### When Students Get Stuck
"Making mistakes is part of learning - let's debug this together"

### Props Explanation
"Props flow down like water, callbacks flow up like messages"

### Redux When
"If you're passing props through 3+ components, consider Redux"

### Closing Motivation
"You now have the foundation. Build something, anything, and you'll learn 10x more"

---

## Quick Reference - Common Student Questions

**Q: Do I need a Mac for iOS development?**
A: With Expo, no! Use Expo Go app. For native modules, yes.

**Q: React Native vs Flutter?**
A: RN uses JavaScript (larger community), Flutter uses Dart (better performance). Both great!

**Q: Can I use my React web knowledge?**
A: Yes! Same concepts, different components. `<div>` becomes `<View>`.

**Q: How do I publish to app stores?**
A: Expo makes it easy with `eas build`. We'll cover in advanced session.

**Q: What about TypeScript?**
A: Highly recommended for production! Works great with React Native.

**Q: Performance compared to native?**
A: 95%+ for most apps. Instagram, Discord use it with great results.

**Q: Can I use native code?**
A: Yes! Native modules let you write Swift/Kotlin when needed.

---

## Session Success Metrics

You'll know the session went well if:
- [ ] Students successfully run first Expo app
- [ ] At least 3-5 good questions asked
- [ ] Students can explain props flow
- [ ] Students understand when to use RN
- [ ] Everyone leaves with working code examples
- [ ] Positive feedback about pacing
- [ ] Students excited to build more

---

## Resources Ready to Share

### Documentation
- React Native: https://reactnative.dev
- Expo: https://docs.expo.dev
- React Navigation: https://reactnavigation.org
- Redux Toolkit: https://redux-toolkit.js.org

### Learning Platforms
- React Native docs (best resource)
- freeCodeCamp React Native course
- Udemy courses (Stephen Grider, Maximilian)
- YouTube: William Candillon, Catalin Miron

### Community
- React Native Discord
- Stack Overflow
- GitHub Discussions
- Reddit r/reactnative

### Tools
- Expo Snack (online playground)
- React Native Debugger
- Flipper (debugging)
- Reactotron (state management debugging)

---

**Remember:** Your energy and enthusiasm are contagious. If you're excited about React Native, students will be too!

**Most Important:** Students should leave feeling "I can build a mobile app" not "This is too hard"

Good luck! You've got this! 🚀
