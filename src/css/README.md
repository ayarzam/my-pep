# This file describes the stylesheet hierarchy for this project:

Inspiration taken from "[How to structure a Sass project](http://thesassway.com/beginner/how-to-structure-a-sass-project)."

## Stylesheet Hierarchy

- The css/sass stylesheet will be broken into sub-projects (e.g. site and blog) and implement the following hierarchy:

```
css (stylesheets)/  
|  
`-- App.scss  
    |  
    |-- site/              # Site sub-project  
    |    |-- modules/  
    |    |-- partials/  
    |    |    | _base.scss  
    |    |    |-- home/  
    |    |    `-- navigation/  
    |    |  
    |    `-- _main.scss
    |  
    |-- portfolio/         # Portfolio sub-project  
    |    |-- modules/  
    |    |-- partials/  
    |    |    |-- projects/  
    |    |    `-- _base.scss  
    |    |  
    |    `-- _main.scss
    |  
    |-- blog/              # Blog sub-project  
    |    |-- modules/  
    |    |-- partials/    
    |    |    |  
    |    |    `-- _base.scss  
    |    |  
    |    `-- _main.scss 
    |  
    |-- vendor/             # CSS or Sass from other projects  
    |    |-- _colorpicker-1.1.scss  
    |    |-- _jquery.ui.core-1.9.1.scss  
    |    ...  
    |  
    |-- site.scss           # Primary stylesheets for each project  
    |-- portfolio.scss  
    `-- blog.scss  
```

## Sub-project's Hierarchy

```
sub-project-stylesheet/  
|  
|-- modules/               # Common modules  
|   |-- _all.scss            # Include to get all modules  
|   |-- _utility.scss        # Module name  
|   |-- _colors.scss         # Etc...  
|   ...  
|  
|-- partials/              # Partials  
|   |-- _base.sass           # imports for all mixins + global project variables  
|   |-- _buttons.scss        # buttons  
|   |-- _figures.scss        # figures  
|   |-- _grids.scss          # grids  
|   |-- _typography.scss     # typography  
|   |-- _reset.scss          # reset  
|   ...  
|  
`-- main.scss              # Primary Sass file   
```

- The modules directory is reserved for Sass code that doesn't cause Sass to actually output CSS. Things like mixin declarations, functions, and variables.

- The partials directory is where the meat of my CSS is constructed. This may be breaking the stylesheets into header, content, sidebar, footer components, etc. or it could be broken into much finer categories (typography, buttons, textboxes, selectboxes, etc.).

- The vendor directory is for third-party CSS. This is handy when using prepackaged components developed by other people (or for your own components that are maintained in another project). jQuery UI and a color picker are examples of CSS that you might want to place in the vendor directory. As a general rule don't modify files in the vendor directory. If modifications are needed, add those after the vendored files are included in the primary stylesheet. This should make it easier to update third-party stylesheets to more current versions in the future.
