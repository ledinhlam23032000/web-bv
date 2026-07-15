import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";

const projectRoot = path.resolve(process.cwd());
const require = createRequire(import.meta.url);

function loadTsModule(relativePath) {
  const absolutePath = path.join(projectRoot, relativePath);
  const source = fs.readFileSync(absolutePath, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: absolutePath,
  }).outputText;

  const module = { exports: {} };
  const context = vm.createContext({
    exports: module.exports,
    module,
    require,
    console,
    __dirname: path.dirname(absolutePath),
    __filename: absolutePath,
  });

  vm.runInContext(compiled, context, { filename: absolutePath });
  return module.exports;
}

const siteContent = loadTsModule("src/lib/site-content.ts");
const articleDetails = loadTsModule("src/lib/article-details.ts");

const seed = {
  exportedAt: new Date().toISOString(),
  siteInfo: siteContent.siteInfo,
  navigation: siteContent.navigation,
  qualityMetrics: siteContent.qualityMetrics,
  featuredDepartments: siteContent.featuredDepartments,
  specialties: siteContent.specialties,
  medicalServices: siteContent.medicalServices,
  packageOptions: siteContent.packageOptions,
  doctorProfiles: siteContent.doctorProfiles,
  articleCatalog: siteContent.articleCatalog.map((article) => ({
    ...article,
    slug: siteContent.getArticleSlug(article),
    detail: articleDetails.articleDetails[siteContent.getArticleSlug(article)] ?? null,
  })),
  symptomGroups: siteContent.symptomGroups,
  faqItems: siteContent.faqItems,
  footerGroups: siteContent.footerGroups,
};

const outputPath = path.join(
  projectRoot,
  "wordpress/wp-content/plugins/hong-phuc-core/assets/data/seed.json",
);

fs.writeFileSync(outputPath, `${JSON.stringify(seed, null, 2)}\n`, "utf8");
console.log(`Exported ${seed.specialties.length} departments, ${seed.medicalServices.length} services, ${seed.doctorProfiles.length} doctors, ${seed.articleCatalog.length} articles.`);
