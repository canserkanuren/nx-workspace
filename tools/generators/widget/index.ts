import {
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  joinPathFragments,
  names,
  Tree,
  updateJson
} from '@nrwl/devkit';

interface SgWidgetSchemaOptions {
  name: string;
}

export default async function (host: Tree, schema: SgWidgetSchemaOptions) {
  const { libsDir } = getWorkspaceLayout(host);

  const normalizedNames = names(schema.name);

  generateFiles(
    // virtual file system
    host,

    // the location where the template files are
    joinPathFragments(__dirname, './templates'),

    // where the files should be generated
    `${libsDir}/${normalizedNames.fileName}`,

    // the variables to be substituted in the template
    {
      normalizedName: normalizedNames.className,
      normalizedTitle: normalizedNames.fileName
    }
  );

  updateJson(host, joinPathFragments(__dirname, 'tsconfig.json'), json => {
    json.compilerOptions = {
      ...json.compilerOptions,
      forceConsistentCasingInFileNames: true,
      strict: true,
      noImplicitOverride: true,
      noPropertyAccessFromIndexSignature: true,
      noImplicitReturns: true,
      noFallthroughCasesInSwitch: true
    };

    return json;
  });

  // addProjectConfiguration(host, normalizedNames.fileName, {
  //   root: __dirname,
  //   sourceRoot: joinPathFragments(__dirname, 'src'),
  //   projectType: 'library',
  //   tags: options.parsedTags,
  //   targets
  // });

  await formatFiles(host);
}

// await libraryGenerator(tree, { name: schema.name });
// await formatFiles(tree);
// return () => {
//   installPackagesTask(tree);
// };
