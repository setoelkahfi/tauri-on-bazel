# tauri-on-bazel

> {fast, correct} + {optimized, secure} = {tauri-on-bazel}

This is a small repository to demonstrate how to build a [Tauri](https://tauri.app/) v1.5 project using [NextJS](https://nextjs.org/) v14 + Typescript + Tailwindcss as a frontend framework with [Bazel](https://bazel.build/) v6.

![Screenshot 0 of Tauri on Bazel with NextJS, TypeScript, and Tailwindcss.](/screenshots/0.png?raw=true "Screenshot 0 of Tauri on Bazel with NextJS, TypeScript, and Tailwindcss.")
![Screenshot 1 of Tauri on Bazel with NextJS, TypeScript, and Tailwindcss.](/screenshots/1.png?raw=true "Screenshot 1 of Tauri on Bazel with NextJS, TypeScript, and Tailwindcss.")

## Before running it

This project is using `git LFS`. After cloning it, remember to run the following commands.

```bash
git lfs install
git lfs pull
```

## How to use

To run Tauri in development mode, just run the following:

```bash
bazel run :dev
```

To bundle your app, just run:

```bash
bazel run :bundle
```

If you are interested in running or building the front end, only run the following:

```bash
bazel run :next-dev
bazel run :next-build
```

This has been tested successfully on macOS M1.

## Output

You can retrieve the output app from `dist/bin/bundle.sh.runfiles/app/src-tauri/target/release/bundle`.

## Credits

Original [repo](https://github.com/marmos91/tauri-bazel-next-typescript).
