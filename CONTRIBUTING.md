# Contribute!!!

We'd love you to!

If you find a bug or have some ideas for a feature or enhancement, please raise an issue!


## Get started!!

All PRs on zhishi are based on existing issues. Go through the issues log to find those that are open and don't have the `in progress` label. Issues that have the `in progress` are already being worked on by somebody else.

## Found an issue ticket that interests me!

All issues to be raised will contain explicitly labels depicting if it’s a feature/fix and the team maintaining (notification, search, tags, etc).

Once you settle on an issue, you could seek out more information through comments or email to make sure you understand the goals.


## I understand the issue. I'm ready to get started

Okay, there are some setup steps if it's your first time contributing.

### First time contributing

If you're contributing for the firs time, you should fork the repository first. This step is needed only once. See github's [guide on doing so](https://help.github.com/articles/fork-a-repo/). Brief instructions with `hiddenwisdom-react-js` is given below:

Navigate to the sugar repository, press Fork button, then

    git clone  https://github.com/YOUR-NAME/hiddenwisdom-react-js.git
    cd hiddenwisdom-react-js
    git remote add upstream https://github.com/lagos-devs/hiddenwisdom-react-js.git
    git fetch upstream

### I've contributed before. . .

Sweet! First, sync your fork with the upstream repo

    git fetch upstream


Next:

1. Checkout to the `develop` branch: `git checkout develop`
2. Pull from `develop` in origin: `git pull origin develop`
3. Checkout to a branch named in the following format:
`[label] / #[issue number] / [short-description]` .
Eg: `fix/#38/fix-bug-in-question-create`

All ready issues are appropriately labelled, so that wouldn't . . well . . be an issue :)

We believe in _atomic_ commits. Try to make commits as regularly as you can so it will be easy to step through them.

## Closing an issue

To raise a PR that closes an issue, specify the title in this format: `closes #[issue number]` . Eg. `closes #38`

In the body of the PR, give us details on what the PR does, so it's easy to see what you achieved at a glance.

## Thank you!

If you read up till this point, then thank you! Just that. Thanks!
