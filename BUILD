load("@npm//next:index.bzl", "next")
load("@npm//@tauri-apps/cli:index.bzl", "tauri")

next(
    name = "next-build",
    data = glob([
        "app/**",
        "public/**",
    ]) + [
        "tsconfig.json",
        "tailwind.config.js",
    ],
    templated_args = ["build"],
)

next(
    name = "next-dev",
    data = glob([
        "app/**",
        "public/**",
    ]) + [
        "tsconfig.json",
        "tailwind.config.js",
    ],
    templated_args = ["dev"],
)

tauri(
    name = "dev",
    data = glob(["**"]) + [
        "@npm//next",
    ],
    templated_args = [
        "dev",
    ],
)

tauri(
    name = "bundle",
    data = glob(["**"]) + [
        "@npm//next",
    ],
    templated_args = [
        "build",
    ],
)
